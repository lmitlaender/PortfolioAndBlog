#!/usr/bin/env fish

# Convert images under ./assets and ./content to .webp while keeping originals.
# Defaults:
# - PNG: lossless WebP
# - JPG/JPEG: lossy WebP (quality 82)
# Existing .webp files are skipped unless --force is provided.

set -l force 0
if test (count $argv) -gt 0
    for arg in $argv
        switch $arg
            case --force
                set force 1
            case '*'
                echo "Unknown argument: $arg"
                echo "Usage: ./convert-webp.fish [--force]"
                exit 2
        end
    end
end

if not command -q cwebp
    echo "Error: cwebp not found in PATH. Install with: sudo pacman -S libwebp-utils"
    exit 1
end

set -l converted 0
set -l skipped 0
set -l failed 0

for dir in ./assets ./content
    if not test -d "$dir"
        continue
    end

    find "$dir" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 |
    while read --local --null file
        set -l out (string replace -r '\.[^.]+$' '.webp' -- "$file")

        if test $force -eq 0 -a -e "$out"
            set skipped (math $skipped + 1)
            continue
        end

        set -l lower (string lower -- "$file")
        if string match -rq '\.png$' -- "$lower"
            cwebp -quiet -lossless -z 9 -m 6 "$file" -o "$out"
        else
            cwebp -quiet -q 82 -m 6 "$file" -o "$out"
        end

        if test $status -eq 0
            set converted (math $converted + 1)
            echo "OK  $file -> $out"
        else
            set failed (math $failed + 1)
            echo "ERR $file"
        end
    end
end

echo
echo "Done. converted=$converted skipped=$skipped failed=$failed"
if test $failed -gt 0
    exit 1
end
