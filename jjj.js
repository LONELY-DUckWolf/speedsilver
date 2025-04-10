const tuleni = document.querySelectorAll(".kartinka-tulenya");
const observer = new IntersectionObserver(entries => {
    entries.forEach((zahodi) => {
        console.log(zahodi.target)
        if (zahodi.isIntersecting) {
            zahodi.target.src = zahodi.target.getAttribute("data-src")
            zahodi.target.classList.add('nevedimka');
            zahodi.target.classList.add('tuleni-animka');
        } else {
            zahodi.target.classList.remove('nevedimka');
            zahodi.target.classList.remove('tuleni-animka');
        }
    })
})
tuleni.forEach((tulen) => {
    observer.observe(tulen);
});