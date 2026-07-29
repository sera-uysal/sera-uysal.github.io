import type { Degree as DegreeType } from '@/data/resume/degrees';

import Degree from './Education/Degree';

interface EducationProps {
    data: DegreeType[];
    certifications?: DegreeType[];
}

export default function Education({data, certifications = []}: EducationProps) {
    return (
        <div className="education">
            <div className="title">
                <h3>Education</h3>
            </div>
            {data.map((degree) => (
                <Degree data={degree} key={degree.school} />
            ))}

            {certifications.length > 0 && (
                <>
                    <div className="title">
                        <h4>Certifications</h4>
                    </div>
                    {certifications.map((certification) => (
                        <Degree data={certification} key={certification.school} />
                    ))}
                </>
            )}
        </div>
    );
}