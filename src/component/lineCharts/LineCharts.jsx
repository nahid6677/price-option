import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineCharts = () => {
    const studentData = [
        {"id": 1, "name": "A", "mark": 85, "physics": 78, "chemistry": 82},
        {"id": 2, "name": "B", "mark": 78, "physics": 81, "chemistry": 79},
        {"id": 3, "name": "C", "mark": 92, "physics": 89, "chemistry": 85},
        {"id": 4, "name": "D", "mark": 74, "physics": 76, "chemistry": 80},
        {"id": 5, "name": "E", "mark": 88, "physics": 84, "chemistry": 87},
        {"id": 6, "name": "F", "mark": 79, "physics": 82, "chemistry": 78},
        {"id": 7, "name": "G", "mark": 91, "physics": 90, "chemistry": 89},
        {"id": 8, "name": "H", "mark": 83, "physics": 85, "chemistry": 84},
        {"id": 9, "name": "I", "mark": 76, "physics": 80, "chemistry": 77},
        {"id": 10, "name": "J", "mark": 89, "physics": 88, "chemistry": 90}
    ]
    

    return (
        <div>
            <LineChart width={500} height={400} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'mark'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;