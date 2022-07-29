function change() {
        let results = Array.from(document.querySelectorAll('.result > div')),
        modelsChecked = document.querySelectorAll('.filter input.models:checked');
        // Hide all results
        results.forEach(function(result) {
            result.style.display = 'none';
        });
        // Filter results to only those that meet ALL requirements:        

        filterModelsOrProcessors(modelsChecked);


        function filterModelsOrProcessors(modelsOrProcessorsChecked) {
            results = Array.from(modelsOrProcessorsChecked).reduce(function(sum, input) {
                const attrib = input.getAttribute('rel');
                return sum.concat(results.filter(function(result) {
                    return result.classList.contains(attrib);
                }));
            }, []);
        }
        // Show those filtered results:
        results.forEach(function(result) {
            result.style.display = 'block';
        });
}
