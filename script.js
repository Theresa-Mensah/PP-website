/*window.addEventListener("load", () => {
  const input = document.getElementById("upload");
  const filewrapper = document.getElementById("filewrapper");

  input.addEventListener("change",(e)=>{
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split(".").pop();
    fileshow(fileName, filetype);
  });

  const fileshow=(fileName, filetype) =>{
    const showfileboxElem= document.createElement("div");
    showfileboxElem.classList.add("showfilebox");
    const leftElem = document.createElement("div");
    leftElem.classList.add("left");
    const fileTypeElem = document.createElement("span");
    showfileboxElem.append(leftElem);
    fileTypeElem.classList.add("filetype");
    fileTypeElem.innerHTML=filetype;
    leftElem.append(fileTypeElem);
    showfileboxElem.append(leftElem);



    filewrapper.append(showfileboxElem);


  }
});
*/

/*window.addEventListener("load", () => {
  const input = document.getElementById("upload");
  const filewrapper = document.getElementById("filewrapper");

  input.addEventListener("change",(e)=>{
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split(".").pop();
    fileshow(fileName, filetype);
  });

  const fileshow = (fileName, filetype) => {
    const showfileboxElem = document.createElement("div");
    showfileboxElem.classList.add("showfilebox");
    
    const leftElem = document.createElement("div");
    leftElem.classList.add("left");
    
    const fileTypeElem = document.createElement("span");
    fileTypeElem.classList.add("filetype");
    fileTypeElem.innerHTML = filetype;
    
    leftElem.append(fileTypeElem); // Append fileTypeElem to leftElem
    const filetitleElem = document.createElement("h3");
    filetitleElem.innerHTML=fileName;
    leftElem.append(filetitleElem);

    showfileboxElem.append(leftElem); // Append leftElem to showfileboxElem
    const rightElem = document.createElement("div");
    rightElem.classList.add("right");
    showfileboxElem.append(rightElem);
    const crossElem = document.createElement("span");
    crossElem.innerHTML="&#215;";
    rightElem.append(crossElem);
    filewrapper.append(showfileboxElem); // Append showfileboxElem to filewrapper
    
    crossElem.addEventListener("click",()=>{
      filewrapper.removeChild(showfileboxElem)


    })
  }


});

*/

window.addEventListener("load", () => {
  const input = document.getElementById("upload");
  const filewrapper = document.getElementById("filewrapper");

  input.addEventListener("change",(e)=>{
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split(".").pop();
    fileshow(fileName, filetype);
  });

  const fileshow = (fileName, filetype) => {
    const showfileboxElem = document.createElement("div");
    showfileboxElem.classList.add("showfilebox");
    
    const leftElem = document.createElement("div");
    leftElem.classList.add("left");
    
    const fileTypeElem = document.createElement("span");
    fileTypeElem.classList.add("filetype");
    fileTypeElem.innerHTML = filetype;
    
    leftElem.append(fileTypeElem); // Append fileTypeElem to leftElem
    const filetitleElem = document.createElement("h3");
    filetitleElem.innerHTML=fileName;
    leftElem.append(filetitleElem);

    const downloadLink = document.createElement("a");
    downloadLink.href = "#"; // Add the file download link
    downloadLink.innerHTML = "Download"; // Set the link text
    downloadLink.addEventListener("click", () => {
      // Trigger file download when the link is clicked
      window.open(fileName, '_blank');
    });
    leftElem.append(downloadLink); // Append the download link to leftElem

    showfileboxElem.append(leftElem); // Append leftElem to showfileboxElem

    const rightElem = document.createElement("div");
    rightElem.classList.add("right");
    showfileboxElem.append(rightElem);
    const crossElem = document.createElement("span");
    crossElem.innerHTML="&#215;";
    rightElem.append(crossElem);
    filewrapper.append(showfileboxElem); // Append showfileboxElem to filewrapper
    
    crossElem.addEventListener("click",()=>{
      filewrapper.removeChild(showfileboxElem);
    });
  };
});

