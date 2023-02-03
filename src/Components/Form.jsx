import Example2 from '../Tests/Example2'
import FormBuilder from './FormComponents/FormBuilder'
import FormHeader from './FormComponents/FormHeader'
import FormFooter from './FormComponents/FormFooter'

export default function Form() {
    
    const DATA = Example2
    console.log(Example2)
    return (
        <>
            <FormHeader />
            {/* <FormBuilder /> */}
            <FormFooter />
        </>
    )
}