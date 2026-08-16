import ProductCard from "./ProductCard"

export default function Home() {
    return (
        <div className="px-4 sm:px-6 lg:px-12">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl">
                Welcome
            </h1>

            <div className="gred gred-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div><ProductCard /></div>
                <div>Card 2</div>
                <div>Card 3</div>
                <div>Card 4</div>
                <div>Card 5</div>
                <div>Card 6</div>
                <div>Card 7</div>
                <div>Card 8</div>
                <div>Card 9</div>
            </div>
        </div>
    );
}