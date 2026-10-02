[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Download-Unsplash($url, $outFile) {
    try {
        $headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        Invoke-WebRequest -Uri $url -Headers $headers -OutFile $outFile -UseBasicParsing
        $f = Get-Item $outFile
        Write-Host "Success: $outFile ($($f.Length) bytes)"
    } catch {
        Write-Host "Failed: $url : $_"
    }
}

Download-Unsplash "https://images.unsplash.com/photo-1536719504278-9cfcf309f376?q=80&w=1600&auto=format&fit=crop" "public/images/red_tractor_harvest_field.jpg"
Download-Unsplash "https://images.unsplash.com/photo-1635438622580-e5fd8ca7096e?q=80&w=1600&auto=format&fit=crop" "public/images/red_tractor_farm_road.jpg"
Download-Unsplash "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop" "public/images/usa_farmland_landscape.jpg"
Download-Unsplash "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1600&auto=format&fit=crop" "public/images/usa_industrial_machining.jpg"
