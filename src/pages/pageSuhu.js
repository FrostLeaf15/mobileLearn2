import { useState } from 'react';
import styles from '../styles/pageSuhu.module.css';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const convertToCelsius = (fahrenheit) => {
        return ((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2);
    };

    const convertToFahrenheit = (celsius) => {
        return ((parseFloat(celsius) * 9 / 5) + 32).toFixed(2);
    };

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(convertToFahrenheit(value));
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(convertToCelsius(value));
    };

    return (
    <div className={styles.container}>
        <h1 className={styles["heading"]}>Temperature Converter</h1>
        <div>
            <label>Celsius:</label>
            <input className={styles["input"]} type="number" value={celsius} onChange={handleCelsiusChange} />
        </div>
        <div>
            <label>Fahrenheit:</label>
            <input className={styles["input"]} type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        </div>
        </div>
    );
};

export default TemperatureConverter;
