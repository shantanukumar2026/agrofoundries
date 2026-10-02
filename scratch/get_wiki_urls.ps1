[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$h = @{ "User-Agent" = "AgroFarmsUSA/1.0 (contact@agrofarms-machinery.com)" }

$titles = "File:Case_IH_combine_harvesting_soybeans.jpg|File:Tractor_at_work_on_a_field_in_Idaho.jpg|File:Case_IH_cotton_harvester,_rear_view.jpg|File:Case_IH_195_with_trailer.jpg|File:Case_IH_Patriot_4050_Agritechnica_2025_(DSC05821).jpg"
$uri = "https://commons.wikimedia.org/w/api.php?action=query&titles=" + [uri]::EscapeDataString($titles) + "&prop=imageinfo&iiprop=url&iiurlwidth=1400&format=json"

$res = Invoke-RestMethod -Uri $uri -Headers $h
foreach ($page in $res.query.pages.psobject.properties.Value) {
    if ($page.imageinfo) {
        $title = $page.title
        $thumb = $page.imageinfo[0].thumburl
        $full = $page.imageinfo[0].url
        Write-Host "TITLE: $title"
        Write-Host "THUMB: $thumb"
        Write-Host "FULL:  $full"
    }
}
