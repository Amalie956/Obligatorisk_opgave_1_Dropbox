# Obligatorisk_opgave_1_Dropbox 
#### Øvelse 1: Opsætning

#### Øvelse 2: Opret en mappe
<details><summary>
Anvendte endpoint (url) og HTTP-verb du har brugt:
</summary>
``POST` `https://api.dropboxapi.com/2/files/create_folder_v2``
</details>
<details><summary>
Beskriv desuden hvad du evt. har skrevet i body i dit request og det svar du har fået tilbage fra API'en
</summary>
Request i body:`{"autorename": false,"path": "/TestMappe"}`

svar fra api'en: `{"metadata": {
        "name": "TestMappe",
        "path_lower": "/testmappe",
        "path_display": "/TestMappe",
        "id": "id:sIm5-l55P_8AAAAAAAAABg"}}`
</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
skriv svaret her
</details>


#### Øvelse 3: Hent mappe detaljer
<details><summary>
Find det endpoint i dokumentationen, der giver detaljer om en specifik mappe
</summary>
`POST` `https://api.dropboxapi.com/2/files/get_metadata`
</details>

<details><summary>
Vælg en mappe fra din Dropbox, noter dens sti, og brug Postman til at hente dens detaljer
</summary>
Den sti: /TestMappe

Request i body: {
    "include_deleted": false,
    "include_has_explicit_shared_members": false,
    "include_media_info": false,
    "path": "/TestMappe"
}

Response fra Postman: 

Status kode: 200 OK

{
    ".tag": "folder",
    "name": "TestMappe",
    "path_lower": "/testmappe",
    "path_display": "/TestMappe",
    "id": "id:sIm5-l55P_8AAAAAAAAABg"
}
</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
skriv svaret her
</details>

#### Øvelse 4: Upload en fil
<details><summary>
Anvendte endpoint (url) og HTTP-verb du har brugt:
</summary>
POST https://content.dropboxapi.com/2/files/upload/
</details>

<details><summary>
Hvordan man oploader en fil
</summary>
        
*Tilføj ny key og value i din header*

Dropbox-API-Arg : {"autorename":false,"mode":"add","mute":false,"path":"/TestMappe/Test.docx","strict_conflict":false}

 *Vælg din ønskede fil*   
* `Postman`
* `Body`
* `Setting` (øverst højre hjørne)
* `Choose` "Working directory"
* `Select`(vælg den mappe, hvor du har din fil, du vil uploade)
* `Tryk kryds`
* `Body`
* `Select fil` (vælg filen i den mappe, du valgte i "working directory")
* `Send`

Resultat
![billede](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/52f68b84-a6a8-421e-8aae-8dcc335ab729)

</details>
