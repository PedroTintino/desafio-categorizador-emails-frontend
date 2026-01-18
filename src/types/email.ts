export interface AnalyzeEmailRequest{
    content: string
}

export interface AnalyzeEmailResponse{
    content: string,
    category: "Produtivo | Improdutivo",
    suggested_response: string
}