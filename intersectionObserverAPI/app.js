'use strict'

const sections = document.querySelectorAll('.section')
const revealSections = (entries, observer) => {
    const [entry] = entries;
    console.log(entry)

    if(!entry.isIntersecting) return
    entry.target.classList.add('section-reveal');
    observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSections, {
    root: null,
    threshold: 0.3
});

sections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.remove('section-reveal');
})