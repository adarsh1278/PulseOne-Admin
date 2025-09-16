// Example usage of your custom colors with Tailwind CSS
export const ColorExamples = () => {
    return (
        <div className="p-6 bg-primary space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Custom Color Examples</h2>

            {/* Primary Colors */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Primary Colors</h3>
                <div className="flex gap-4">
                    <div className="bg-primary text-white p-4 rounded">bg-primary</div>
                    <div className="bg-primary-dark text-white p-4 rounded">bg-primary-dark</div>
                    <div className="bg-primary-light text-white p-4 rounded">bg-primary-light</div>
                </div>
            </div>

            {/* Secondary Colors */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Secondary Colors</h3>
                <div className="flex gap-4">
                    <div className="bg-secondary-green text-white p-4 rounded">bg-secondary-green</div>
                    <div className="bg-secondary-orange text-white p-4 rounded">bg-secondary-orange</div>
                </div>
            </div>

            {/* Status Colors */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Status Colors</h3>
                <div className="flex gap-4">
                    <div className="bg-success text-white p-4 rounded">bg-success</div>
                    <div className="bg-warning text-white p-4 rounded">bg-warning</div>
                    <div className="bg-danger text-white p-4 rounded">bg-danger</div>
                </div>
            </div>

            {/* Chart Colors */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Chart Colors</h3>
                <div className="flex gap-4">
                    <div className="bg-chart-blue text-white p-4 rounded">bg-chart-blue</div>
                    <div className="bg-chart-green text-white p-4 rounded">bg-chart-green</div>
                    <div className="bg-chart-orange text-white p-4 rounded">bg-chart-orange</div>
                </div>
            </div>

            {/* Gradients */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Gradient Backgrounds</h3>
                <div className="space-y-2">
                    <div className="bg-primary-gradient text-white p-4 rounded">bg-primary-gradient</div>
                    <div className="bg-hero-gradient text-white p-4 rounded">bg-hero-gradient</div>
                    <div className="bg-success-gradient text-white p-4 rounded">bg-success-gradient</div>
                </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Text Colors</h3>
                <div className="space-y-1">
                    <p className="text-primary">text-primary</p>
                    <p className="text-secondary-green">text-secondary-green</p>
                    <p className="text-success">text-success</p>
                    <p className="text-warning">text-warning</p>
                    <p className="text-danger">text-danger</p>
                </div>
            </div>
        </div>
    );
};