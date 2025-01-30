export default function Color({ hex, name, onColorButtonClick }) {
    const onBtClick = () => {
        onColorButtonClick(hex);
    }

    return (
        <button
            className='color-square'
            style={{ backgroundColor: hex }}
            onClick={onBtClick}
        >
            <h2>{name}</h2>
        </button>
    )
}