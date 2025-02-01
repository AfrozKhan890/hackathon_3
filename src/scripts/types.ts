// types.ts

export interface BlogPost {
    src: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  