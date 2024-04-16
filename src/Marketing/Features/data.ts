import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaAccessibleIcon, FaExpandAlt, FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

export const features = [
  {
    name: '투명한 처방 (Transparent Prescription)',
    description: '판매 실적이 아닌 고객의 건강만을 최우선으로 여깁니다. 꼭 필요한 영양제만을 객관적이고 정직하게 추천해드립니다.',
    icon: BsStars,
  },
  {
    name: '열린 선택지 (Open Options)',
    description:
      '자사 제품에 얽매이지 않습니다. 세상의 모든 영양제를 꼼꼼히 검토하여 최적의 것을 골라 처방합니다.',
    icon: IoRocketSharp,
  },
  {
    name: '가족애 (Family Love)',
    description: '가족의 건강을 지키는 마음으로 진심을 다해 상담해드립니다. 꼭 필요한 만큼만 처방하며, 과하지도 모자라지도 않게 합니다.',
    icon: BsFillMoonFill,
  },
  {
    name: '명확한 원칙 (Clear Principles)',
    description:
      "영양제로 해결할 수 없는 건강 문제에는 영양제 처방을 하지 않습니다. 전문적이고 합리적인 판단으로 고객을 안내합니다.",
    icon: FaPaintBrush,
  },
  {
    name: '평생 동반자 (Lifetime Companion)',
    description: '한번의 판매로 끝나지 않습니다. 고객 건강의 완벽한 대전환 때까지 지속적인 케어와 발전적 보완을 약속드립니다.',
    icon: FaExpandAlt,
  },
]
