import './Radio.css'

export function Radio({ text, onChange }) {
    return <label className='radio_line'><input className="Radio" type="radio" value={text} onChange={onChange}/>{text}</label>
}