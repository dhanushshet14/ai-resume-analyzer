import React from 'react'

type Suggestion = {
    type: 'good' | 'improve'
    tip: string
}

const getGradientFromScore = (score: number) => {
    if (score > 69) return 'bg-gradient-to-b from-green-100 to-white'
    if (score > 49) return 'bg-gradient-to-b from-yellow-100 to-white'
    return 'bg-gradient-to-b from-red-100 to-white'
}

const getIconFromScore = (score: number) => {
    if (score > 69) return '/icons/ats-good.svg'
    if (score > 49) return '/icons/ats-warning.svg'
    return '/icons/ats-bad.svg'
}

const ATS = ({ score, suggestions }: { score: number; suggestions: Suggestion[] }) => {
    const gradientClass = getGradientFromScore(score)
    const statusIcon = getIconFromScore(score)

    return (
        <div className={`rounded-2xl shadow-md p-6 ${gradientClass}`}>
            {/* Top section */}
            <div className="flex items-center gap-4 mb-4">
                <img src={statusIcon} alt="ATS status" className="w-10 h-10" />
                <h3 className="text-2xl font-bold text-gray-900">ATS Score - {score}/100</h3>
            </div>

            {/* Description section */}
            <div className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-gray-900">Applicant Tracking System Compatibility</h4>
                <p className="text-sm text-gray-500">
                    This section evaluates how well your resume can be parsed and understood by Applicant Tracking Systems
                    (ATS). Improving these areas will increase your chances of passing automated screenings.
                </p>

                {/* Suggestions list */}
                <ul className="mt-2 flex flex-col gap-2">
                    {suggestions && suggestions.length > 0 ? (
                        suggestions.map((s, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <img
                                    src={s.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
                                    alt={s.type === 'good' ? 'Good' : 'Improve'}
                                    className="w-5 h-5 mt-0.5"
                                />
                                <span className="text-sm text-gray-700">{s.tip}</span>
                            </li>
                        ))
                    ) : (
                        <li className="text-sm text-gray-500">No suggestions available.</li>
                    )}
                </ul>

                <p className="text-sm text-gray-600 mt-4">
                    Keep refining your resume to improve ATS compatibility and maximize your visibility to recruiters.
                </p>
            </div>
        </div>
    )
}

export default ATS
