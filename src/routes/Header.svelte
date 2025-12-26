<script>
    // @ts-nocheck
    import { browser } from '$app/environment';
    
    function handleScroll() {
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    }

    function ToggleMenu(){
        if (browser) {
            const menuToggle = document.querySelector('.menuToggle');
            const navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
    }
</script>

<svelte:window on:scroll={handleScroll} />
<header>
    <a href="/" class="logo">Aanya Lakhani</a>
    <nav class="navigation">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#skills">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
        </ul>
    </nav>
    <button class="menuToggle" on:click={ToggleMenu()}>hello</button>
</header>