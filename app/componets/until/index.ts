export async function fetchData(){
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'db05e781eemsh8bc0e1d7915986ep1ff4eejsnb9c1b59f05a4',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };
try {
	const response = await fetch(url, options);
	const result = await response?.json();
	return result
} catch (error) {
	console.error(error);
}
}
