# Obligatorisk_opgave_1_Dropbox 
#### Øvelse 1: Opsætning
<details><summary>
Generer Token
</summary>
[Hjemmeside](https://www.dropbox.com/developers/apps) -> permissions -> OAuth 2 -> Generated access token
</details>
<details><summary>
Header og Body
</summary>
Header
        
![billede](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/e7f51b55-40b2-4688-b105-72a80fbe158f)

Body
![billede](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/d44b54b9-f3ec-4872-853b-0a5a08eb2459)
</details>





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

#### Øvelse 5: Slet en fil
<details><summary>
Anvendte endpoint (url), HTTP-verb og stien på den fil, du har slettet:
</summary>
POST https://api.dropboxapi.com/2/files/delete_v2
        
Body:{ "path": "/TestMappe/Test.docx"}

Sti: "/TestMappe/Test.docx"

Resultat (Test.docx er fjernet)
![billede](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/84d4a84e-b048-4cbf-8c04-73a86fbc5884)

</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
Skriv noget her
</details>

#### Øvelse 7: Søg efter filer
