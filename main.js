let testBody = {
    "path": "",
    "recursive": false,
    "include_media_info": false,
    "include_deleted": false,
    "include_has_explicit_shared_members": false,
    "include_mounted_folders": true,
    "include_non_downloadable_files": true
  };

  let jsonTestBody = JSON.stringify(testBody);

  console.log(jsonTestBody);

fetch("https://api.dropboxapi.com/2/files/list_folder", {
  method: 'POST', 
  headers: {
    'Authorization': 'Bearer sl.Blg6ZfRoV1otx9Odety5wVhkBA5y6SEOPLj33VGF3QFTNSkbXUzq-cidOgM3LIgfgGEZ_4MdHhp8xQyk6_Mss-n5kR9oKScTSf-SVKOue36DejQOYrUvhr8uoX-do2pWC2ZC61R2icyk4EtBRB-3',
    'Content-Type': 'application/json'
  },
  body: jsonTestBody
})
.then(res => res.json())
.then(dropboxFetch => { 
   console.log(dropboxFetch); 
});


