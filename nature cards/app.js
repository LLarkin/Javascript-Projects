const changevideo = document.querySelector("#topvideo")

const videos = ["assets/japan.mp4","assets/seoul.mp4",
"assets/india.mp4","assets/china.mp4"]



function videoRender(x){
	console.log(videos[x])
	if (changevideo.src != videos[x]) {
		changevideo.src = videos[x]
	}
	
}

