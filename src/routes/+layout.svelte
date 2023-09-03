<main class="f"><slot /></main>

<style>
    main {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column;
        }
    }
</style>
