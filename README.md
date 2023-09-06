Dokumentation der er blevet brugt i opgaverne: 

https://www.dropbox.com/developers/documentation/http/documentation#sharing-list_folders

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
Det er i overenstemmelse, da POST = opret mappe
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
POST er ikke i overenstemmelse, da man skal bruge GET = hente noget
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
        
Request i Body:{ "path": "/TestMappe/Test.docx"}

Sti: "/TestMappe/Test.docx"

Resultat (Test.docx er fjernet)
![billede](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/84d4a84e-b048-4cbf-8c04-73a86fbc5884)

</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
POST er ikke i overenstemmelse, da man skal bruge DELETE = slette noget
</details>

#### Øvelse 7: Søg efter filer
<details><summary>
Anvendte endpoint (url) og HTTP-verb du har brugt:
</summary>
POST https://api.dropboxapi.com/2/files/search_v2
        
Request i Body:{ "path": "/TestMappe/teest.docx"}

Response - status: 200 OK:
{
    "match_field_options": {
        "include_highlights": false
    },
    "options": {
        "file_status": "active",
        "filename_only": false,
        "max_results": 20,
        "path": "/TestMappe"
    },
    "query": "teest"
}
</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
POST er ikke i overenstemmelse, da man skal bruge GET = hente noget
</details>

#### Øvelse 8: Flyt en fil
<details><summary>
Anvendte endpoint (url) og HTTP-verb du har brugt:
</summary>
POST https://api.dropboxapi.com/2/files/move_v2
        
Request i Body:

{"allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/TestMappe/teest.docx",
    "to_path": "/TestMappe2/teest.docx"}

Response - status: 200 OK:
{
    "match_field_options": {
        "include_highlights": false
    },
    "options": {
        "file_status": "active",
        "filename_only": false,
        "max_results": 20,
        "path": "/TestMappe"
    },
    "query": "teest"
}
</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
POST er ikke i overenstemmelse, da man skal bruge PUT = opdatere noget
</details>

#### Øvelse 9: Kopier en fil
<details><summary>
Anvendte endpoint (url) og HTTP-verb du har brugt:
</summary>
POST https://api.dropboxapi.com/2/files/copy_v2
        
Request i Body:

{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/TestMappe2/teest.docx",
    "to_path": "/TestMappe/teest.docx"
}

Response - status: 200 OK:

{
    "metadata": {
        ".tag": "file",
        "name": "teest.docx",
        "path_lower": "/testmappe/teest.docx",
        "path_display": "/TestMappe/teest.docx",
        "id": "id:sIm5-l55P_8AAAAAAAAADg",
        "client_modified": "2023-09-06T12:14:25Z",
        "server_modified": "2023-09-06T15:14:13Z",
        "rev": "01604b2323db152000000010d0729a1",
        "size": 11967,
        "is_downloadable": true,
        "content_hash": "6d912025e951dce0dba20f8d3298d08aadbc7e83d05fdb0fda97d68513dd702a"
    }
}

Resultat
| Kopiret teest.docx fra TestMappe2             | Til TestMappe                                      |
| --------------------------------------------- | --------------------------------------------- |
| ![billede1](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/e0f72e85-b8ed-4277-bdb3-7c07831eb283) | ![billede2](https://github.com/Amalie956/Obligatorisk_opgave_1_Dropbox/assets/112120321/d0b4470f-5299-43bf-9017-1ba8fef787a2) |
</details>

<details><summary>
Beskriv om dette flow er i overenstemmelse med princippet "uniform interface" i REST principperne, og hvis ikke hvad kunne gøres bedre?
</summary>
Hmm. Man kan både bruge POST og PUT. På den ene side opretter man en ny fil, på den anden side opdatere man en ny fil i en anden mappe?
</details>

#### Øvelse 10: Brug JavaScript's Fetch med Dropbox API
<details><summary>
I dit repository inkluder den JavaScript-kode og html, du har skrevet
</summary>
Se html og javaScript koden
</details>

#### Øvelse 11: Er https://api.dropboxapi.com/2/ Restfull or not?
<details><summary>
Beskriv hvad du tænker om API´et i forhold til REST “constraints”. 
Hvordan er det i feks. i forhold til “Uniform Interface” og hvad gør det for din oplevelse af at bruge API´et?
</summary>
Min oplevelser er, at jeg forventer at skulle bruge http protokollen DELETE, hvis jeg skal slette noget og ikke POST. Derfor vil jeg sige, API'et ikke lever op til de arkitektoniske begrænsninger som fx Uniform Interface som (forkerte status koder (Øvelse 7), http protokoller (øvelse 3, øvelse 5, øvelse 7 og øvelse 8)


</details>
