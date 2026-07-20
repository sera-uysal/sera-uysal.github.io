import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container" style={{ marginBottom: '1.5rem' }}>
      <header>
        <h4 className="degree" style={{ marginBottom: '0.25rem' }}>
          {data.degree}
        </h4>
        <p className="school" style={{ margin: 0, fontSize: '0.95rem' }}>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.school}
          </a>
          , <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>

      <div
        className="degree-details"
        style={{ marginTop: '0.5rem', paddingLeft: '0.75rem', borderLeft: '2px solid #e5e7eb' }}
      >
        {data.grade && (
          <p style={{ margin: '0.25rem 0' }}>
            <strong>Grade:</strong> {data.grade}
          </p>
        )}
        {data.thesis && (
          <p style={{ margin: '0.25rem 0' }}>
            <strong>Thesis:</strong> <em>{data.thesis}</em>
          </p>
        )}
        {data.supervisor && (
          <p style={{ margin: '0.25rem 0' }}>
            <strong>Supervisor:</strong>{' '}
            <a href={data.supervisorLink} target="_blank" rel="noreferrer">
              {data.supervisor}
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
