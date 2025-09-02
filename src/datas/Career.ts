import type { CareersSection } from "@/types/portfolio/Section";

export const careers: CareersSection = {
    title: "Career Path",
    data: [
        {
            icon: 'mdi-office-building',
            company: '롯데렌탈(주)',
            startDate: '2024.01',
            endDate: 'Present',
            position: '대리',
            team: 'CX개발팀',
            what: [
                '마이카 신차 장기 렌트 서비스(FO/BO) 운영 및 개발',
                '전자 계약 사이트(신차,중고차,법인 등의 계약 등록/관리) 운영 및 개발',
                '롯데카드/골프존/티맵 등 외부 제휴사와의 API 연계를 통한 계약 제휴 서비스 기능 개발',
                '서비스의 점진적인 안정화 및 AOP의 적용을 통한 에러 모니터링 기능 도입',
                '레거시 코드에 대한 DDD 및 3 Layer, TDD 적용을 통한 유지 보수성 및 안정성 증대',
            ],
        },
        {
            icon: 'mdi-code-braces',
            company: '주식회사퍼브',
            startDate: '2022.05',
            endDate: '2023.11',
            position: '프로',
            team: '솔루션개발팀',
            what: [
                'LMS 솔루션 “퍼즐” 서비스의 개발 및 운영, 유지보수 수행',
                '“한국컴패션” 서비스의 어린이 성장노트 관리 SI 프로젝트 수행',
                'LX그룹 신규 유치에 따른 인사정보 연계 및 SSO 로그인 기능 개발',
                'CP사용료 자동 정산 기능 개발',
                '클라우드 기반(NCP) 서버 이중화 구성 및 무중단 배포 구축',
                '젠킨스 CI/CD 도입을 통한 개발/운영 서비스의 배포 간소화',
            ],
        },
        {
            icon: 'mdi-cart',
            company: '브이피주식회사',
            startDate: '2021.07',
            endDate: '2022.04',
            position: '대리',
            team: '플랫폼개발팀',
            what: [
                '커머스 사이트 “포인트샵/기프트샵” 서비스 개발 및 운영',
                '가상화폐 기반 정부과제프로젝트 수행',
            ],
        },
        {
            icon: 'mdi-car',
            company: '케이카 주식회사',
            startDate: '2018.04',
            endDate: '2021.07',
            position: '주임',
            team: 'IT개발팀',
            what: [
                'KCar 직영몰 사이트 운영/개발/유지보수',
                'Spring Framework 마이그레이션',
                'Oracle Procedure를 Spring Batch로 전환',
                '수입인증 중고차 전시 및 검색기능 개발',
            ],
        },
        {
            icon: 'mdi-domain',
            company: '에스케이(주)엔카',
            startDate: '2017.01',
            endDate: '2018.04',
            position: '주임',
            team: 'IT개발1팀',
            what: ['SK엔카직영 사이트 개발/운영', '올댓옥션 사이트 개발/운영'],
        },
    ]
};
