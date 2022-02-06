const JediInfo = document.querySelector("#jediInfo")
const oldInfo = document.querySelector("#oldInfo")
const galacticInfo = document.querySelector("#galacticInfo")
const senateInfo = document.querySelector("#senateInfo")

const galacticLine = document.querySelector("#galacticline")
const jediLine = document.querySelector("#jediline")
const RebulicLine = document.querySelector("#rebulicLine")
const senateLine = document.querySelector("#senateline")


const slider = document.querySelector("#FactionSlides")



function jediAnime(){
	slider.style.backgroundImage = 'url(back1.png)'
	console.log("works fine")
	galacticLine.style.width = '5%'
	jediLine.style.width = '75%'
	senateLine.style.width = '5%'
	RebulicLine.style.width = '5%'
	setTimeout(() => { JediInfo.style.borderRight = '5px solid white'}, 1000);
	setTimeout(() => { JediInfo.style.borderTop  = '5px solid white'}, 1100);
	setTimeout(() => { JediInfo.style.borderLeft  = '5px solid white'}, 1200);
	setTimeout(() => { JediInfo.style.borderBottom  = '5px solid white'}, 1300);
	setTimeout(() => { JediInfo.style.fontSize = 'large'}, 1200);

	setTimeout(() => { oldInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { oldInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { oldInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { oldInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { oldInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { galacticInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { galacticInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { galacticInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { galacticInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { galacticInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { senateInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { senateInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { senateInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { senateInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { senateInfo.style.fontSize = ''}, 1200);

}
console.log(JediInfo)

function RepubAnime(){
	slider.style.backgroundImage = 'url(back2.png)'
	galacticLine.style.width = '5%'
	jediLine.style.width = '5%'
	senateLine.style.width = '5%'
	RebulicLine.style.width = '75%'
	setTimeout(() => { JediInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { JediInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { JediInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { JediInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { JediInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { oldInfo.style.borderRight = '5px solid white'}, 1000);
	setTimeout(() => { oldInfo.style.borderTop  = '5px solid white'}, 1100);
	setTimeout(() => { oldInfo.style.borderLeft  = '5px solid white'}, 1200);
	setTimeout(() => { oldInfo.style.borderBottom  = '5px solid white'}, 1300);
	setTimeout(() => { oldInfo.style.fontSize = 'large'}, 1200);

	setTimeout(() => { galacticInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { galacticInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { galacticInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { galacticInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { galacticInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { senateInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { senateInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { senateInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { senateInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { senateInfo.style.fontSize = ''}, 1200);
}


function galacticAnime(){
	slider.style.backgroundImage = 'url(back4.png)'
	galacticLine.style.width = '75%'
	jediLine.style.width = '5%'
	senateLine.style.width = '5%'
	RebulicLine.style.width = '5%'
	setTimeout(() => { JediInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { JediInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { JediInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { JediInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { JediInfo.style.fontSize = ''}, 1200);
	setTimeout(() => { oldInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { oldInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { oldInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { oldInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { oldInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { galacticInfo.style.borderRight = '5px solid white'}, 1000);
	setTimeout(() => { galacticInfo.style.borderTop  = '5px solid white'}, 1100);
	setTimeout(() => { galacticInfo.style.borderLeft  = '5px solid white'}, 1200);
	setTimeout(() => { galacticInfo.style.borderBottom  = '5px solid white'}, 1300);
	setTimeout(() => { galacticInfo.style.fontSize = 'large'}, 1200);

	setTimeout(() => { senateInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { senateInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { senateInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { senateInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { senateInfo.style.fontSize = ''}, 1200);
}

function senate(){
	slider.style.backgroundImage = 'url(back3.png)'
	console.log("calim")
	senateLine.style.width = '75%'
	RebulicLine.style.width = '5%'
	jediLine.style.width = '5%'
	galacticLine.style.width = '5%'

	setTimeout(() => { JediInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { JediInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { JediInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { JediInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { JediInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { oldInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { oldInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { oldInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { oldInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { oldInfo.style.fontSize = ''}, 1200);

	setTimeout(() => { galacticInfo.style.borderRight = ''}, 1000);
	setTimeout(() => { galacticInfo.style.borderTop  = ''}, 1100);
	setTimeout(() => { galacticInfo.style.borderLeft  = ''}, 1200);
	setTimeout(() => { galacticInfo.style.borderBottom  = ''}, 1300);
	setTimeout(() => { galacticInfo.style.fontSize = ''}, 1200);


	setTimeout(() => { senateInfo.style.borderRight = '5px solid white'}, 1000);
	setTimeout(() => { senateInfo.style.borderTop  = '5px solid white'}, 1100);
	setTimeout(() => { senateInfo.style.borderLeft  = '5px solid white'}, 1200);
	setTimeout(() => { senateInfo.style.borderBottom  = '5px solid white'}, 1300);
	setTimeout(() => { senateInfo.style.fontSize = 'large'}, 1200);

}