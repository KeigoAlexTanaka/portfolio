const controller = new ScrollMagic.Controller();

$(".project").each(function(){

    const picOverlay = $(this).find(".overlay1")
    const projectInfo = $(this).find(".project-info")
    const smallTitle = $(this).find(".small-title")
    const projectLink = $(this).find(".project-link")
    const title = $(this).find("h4")

const animateIn = new TimelineMax();

animateIn
.fromTo(picOverlay,2, {skewX:30,scale:1.5}, {skewX:0, xPercent:125,transformOrigin: "0% 100%", ease: Power4.easeOut})

.from(projectInfo,1,{scaleY:0,transformOrigin: "bottom left"},"-=1.5")

.from(smallTitle,0.3,{autoAlpha:0,y:30,ease:Power4.easeOut},
"-=1")

.from(projectLink,0.3, {autoAlpha: 0, y:30,ease: Power4.easeOut},"-=0.5")

.from(title,0.3, {autoAlpha: 0, y:30,ease: Power4.easeOut},"-=0.75")

// ScrollMagic

const scene = new ScrollMagic.Scene({
    triggerElement: this,
})
// .addIndicators()
.setTween(animateIn).addTo(controller)

});