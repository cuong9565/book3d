type Props = {
    params: Promise<{
        id: string;
    }>;
}

export default async function BookDetailPage({ params }: Props){
    const { id } = await params;
    return (
        <div className="">
            <div className="">Id Sách: {id}</div>
        </div>
    );
}