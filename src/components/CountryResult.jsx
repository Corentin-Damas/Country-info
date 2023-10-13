import { useCountry } from "../data/getDatas"

function CountryResult(){
    const {countriesDatas} = useCountry()
    console.log({countriesDatas})

    return(
        <div>
            {countriesDatas}
        </div>
    )
}

export default CountryResult
