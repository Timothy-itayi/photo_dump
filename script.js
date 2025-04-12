async function upload() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) return alert('No file selected');

    const res = await fetch(`https://l15dzs1cz5.execute-api.ap-southeast-2.amazonaws.com/get-presigned-url?fileName=${file.name}&fileType=${file.type}`);
    const { uploadURL } = await res.json();

    const result = await fetch(uploadURL, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file
    });

    if (result.ok) alert('Upload successful!');
    else alert('Upload failed.');
  }