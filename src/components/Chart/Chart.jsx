import './Chart.scss'
import { Radar } from 'react-chartjs-2'
import { RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Chart as ChartJS } from 'chart.js'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const options = {
    scale: {
        r: {
            min: 0,
            max: 10
        }
    }
}

const data = {
        labels: ['html', 'css', 'javascript', 'react', 'sass'],
        datasets: [
            {
                label: 'personal rating',
                data: [10, 10, 7, 8, 9],
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            }
        ]
    }

function Radarchart() {
    

    return <div className='radar'><Radar data={data} options={options} className='radar__chart'/></div>
}

export default Radarchart