[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Download-Image($url, $outFile) {
    try {
        $headers = @{ "User-Agent" = "AgroFarmsUSA/1.0 (contact@agrofarms-machinery.com)" }
        Invoke-WebRequest -Uri $url -Headers $headers -OutFile $outFile -UseBasicParsing
        $f = Get-Item $outFile
        Write-Host "Success: $outFile ($($f.Length) bytes)"
    } catch {
        Write-Host "Failed: $url : $_"
    }
}

# 1. Red Case IH Sprayer
Download-Image "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Case_IH_3230_Sprayer.JPG/1280px-Case_IH_3230_Sprayer.JPG" "public/images/red_sprayer_patriot.jpg"

# 2. Red Case IH 9120 Combine Harvester
Download-Image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/CaseIH_9120_Combine.JPG/1280px-CaseIH_9120_Combine.JPG" "public/images/red_combine_axialflow.jpg"

# 3. Red Case IH Magnum 250 Heavy Tractor
Download-Image "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Case_IH_Magnum_250.jpg/1280px-Case_IH_Magnum_250.jpg" "public/images/red_tractor_magnum.jpg"

# 4. Red Case IH Steiger 485 Articulated 4WD Tractor
Download-Image "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/IMG_7675_Case_IH_Steiger_485_Tractor.jpg/1280px-IMG_7675_Case_IH_Steiger_485_Tractor.jpg" "public/images/red_tractor_steiger.jpg"

# 5. Red Case IH tractor working on field in Idaho USA
Download-Image "https://upload.wikimedia.org/wikipedia/commons/9/93/Tractor_at_work_on_a_field_in_Idaho.jpg" "public/images/red_tractor_field_idaho.jpg"

# 6. Red Case IH combine harvesting soybeans
Download-Image "https://upload.wikimedia.org/wikipedia/commons/6/69/Case_IH_combine_harvesting_soybeans.jpg" "public/images/red_combine_soybean_harvest.jpg"

# 7. Red Case IH 195 tractor with farm trailer
Download-Image "https://upload.wikimedia.org/wikipedia/commons/5/53/Case_IH_195_with_trailer.jpg" "public/images/red_tractor_trailer.jpg"

