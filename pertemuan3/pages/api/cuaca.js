export default async function handler(req,res){
    const response = await fetch('https://freetestapi.com/api/v1/weathers');
    const cuaca = await response.json();

    res.status(200).json(cuaca);
}