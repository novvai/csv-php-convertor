window.onload = () =>{
    let fileContainer = document.getElementById('csv-file');
    fileContainer.addEventListener('change', e => {
        console.log(fileContainer.files[0]);
        let ajax = new XMLHttpRequest(),
            fileData = new FormData();

        fileData.append('csv-a', fileContainer.files[0]);
        fileData.append('data', 'file_meta_data');

        
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(JSON.parse(ajax.responseText))
                // console.log(ajax.responseText)
            }
        }
        
        ajax.open("POST", "/csv.php", true);

        ajax.send(fileData);
    });
}