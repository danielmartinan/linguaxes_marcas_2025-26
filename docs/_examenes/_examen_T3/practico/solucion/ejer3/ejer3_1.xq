for $c in /cientificos/cientifico
let $nexp := count($c/expediciones/expedicion)
where $nexp > 3
return $c
