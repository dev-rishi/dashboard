import PieChartWithPaddingAngle from './components/Charts/PieChartWithPaddingAngle'
import LineChartAxisInterval from './components/Charts/StackedAreaChart'
import TwoLevelPieChart from './components/Charts/TwoLevelPieChart'
import CloudIcon from './icons/CloudIcon'
import CubeIcon from './icons/CubeIcon'
import DatabaseIcon from './icons/DatabaseIcon'
import LaptopIcon from './icons/LaptopIcon'

export const rootData: any = {
  'Core Infrastructure': {
    compute: {
      instances: {
        Icon: DatabaseIcon,
        label: 'Autonomous Data Warehouse',
        Chart: TwoLevelPieChart,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      },
      Cluster: {
        label: 'Object Storage',
        Icon: CloudIcon,
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`,
        Chart: LineChartAxisInterval,
      },
      Boot: {
        Icon: LaptopIcon,
        label: 'Transaction Processing',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s type specimen book.`,
        Chart: PieChartWithPaddingAngle,
      },
      Images: {
        Icon: CubeIcon,
        label: 'Oracle Cloud Development Kit',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.`,
      },
    },
  },
  'Block Storage': {},
  'Object Storage': {},
}
