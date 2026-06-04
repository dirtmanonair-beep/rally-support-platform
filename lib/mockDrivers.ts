import type { Driver } from './supabase';
export const mockDrivers: Driver[] = [
  { id: '1', name: '山田 太郎', name_en: 'Taro Yamada', name_ko: '야마다 타로', category: 'rally', bio: '全日本ラリー選手権参戦中。2020年クラス3位。', bio_en: 'All Japan Rally Championship. 3rd in class 2020.', bio_ko: '전일본 랠리 선수권 참가. 2020년 3위.', image_url: null, instagram_url: 'https://instagram.com', twitter_url: 'https://twitter.com', monthly_goal: 50000, current_support: 32000, created_at: '2025-01-01' },
  { id: '2', name: '鈴木 花子', name_en: 'Hanako Suzuki', name_ko: '스즈키 하나코', category: 'dirt-trial', bio: 'ダートトライアル女性チャンピオン。長野拠点。', bio_en: "Women's dirt trial champion. Based in Nagano.", bio_ko: '더트 트라이얼 여성 챔피언. 나가노 기반.', image_url: null, instagram_url: 'https://instagram.com', twitter_url: null, monthly_goal: 30000, current_support: 18500, created_at: '2025-01-01' },
  { id: '3', name: '佐藤 健', name_en: 'Ken Sato', name_ko: '사토 켄', category: 'both', bio: 'ラリー＆ダートトライアル両方参戦のオールラウンダー。', bio_en: 'All-rounder in both rally and dirt trial.', bio_ko: '랠리&더트 트라이얼 올라운더.', image_url: null, instagram_url: null, twitter_url: 'https://twitter.com', monthly_goal: 80000, current_support: 55000, created_at: '2025-01-01' },
];
