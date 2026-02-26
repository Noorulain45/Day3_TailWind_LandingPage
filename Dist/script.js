document.documentElement.classList.add('dark');

    function toggleTheme() {
        document.documentElement.classList.toggle('dark');

        const moon = document.getElementById('moonIcon');
        const sun = document.getElementById('sunIcon');

        if (document.documentElement.classList.contains('dark')) {
            moon.classList.add('bg-gray-600');
            moon.classList.remove('text-gray-400');
            sun.classList.remove('bg-gray-600');
            sun.classList.add('text-gray-400');
        } else {
            sun.classList.add('bg-gray-600');
            sun.classList.remove('text-gray-400');
            moon.classList.remove('bg-gray-600');
            moon.classList.add('text-gray-400');
        }
    }