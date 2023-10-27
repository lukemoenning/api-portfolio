import React from 'react'

import * as S from './docs.styles'

import DocsSection from '@/app/components/documentation/docs-section/docs-section'
import type { DocsSectionProps } from '@/app/components/documentation/docs-section/docs-section'

const Docs: React.FC = () => {
  const docsSections: DocsSectionProps[] = [
    {
      title: 'Introduction',
      bodyParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget vehicula lorem. Fusce eu ornare dui. Vivamus tincidunt nisl at arcu feugiat, nec placerat elit lacinia.',
        'Sed scelerisque feugiat libero, quis fermentum dolor interdum in. Proin vitae varius libero. Vivamus sit amet nisl non diam fringilla cursus. Pellentesque ornare dui id purus cursus, at vestibulum purus placerat.',
        'Praesent tincidunt velit in ligula tincidunt, sed tempus nisl sagittis. Vivamus at finibus leo, et dapibus mauris. Curabitur fermentum velit quis mi maximus, quis ultrices dui auctor.',
        'Mauris egestas neque ut sem facilisis, a luctus mauris pretium. Suspendisse potenti. Morbi rutrum erat vel eros convallis, id pharetra lacus tincidunt. Sed ut lorem eget nisl porttitor sollicitudin non sed libero.',
        'Aliquam ac urna ut neque lacinia lacinia a nec nunc. Curabitur auctor nisi id purus pellentesque, in lacinia nisl efficitur. Quisque sit amet sapien nec sapien faucibus molestie.'
      ]
    },
    {
      title: 'Authentication',
      bodyParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget vehicula lorem. Fusce eu ornare dui. Vivamus tincidunt nisl at arcu feugiat, nec placerat elit lacinia.',
        'Sed scelerisque feugiat libero, quis fermentum dolor interdum in. Proin vitae varius libero. Vivamus sit amet nisl non diam fringilla cursus. Pellentesque ornare dui id purus cursus, at vestibulum purus placerat.',
        'Praesent tincidunt velit in ligula tincidunt, sed tempus nisl sagittis. Vivamus at finibus leo, et dapibus mauris. Curabitur fermentum velit quis mi maximus, quis ultrices dui auctor.',
        'Mauris egestas neque ut sem facilisis, a luctus mauris pretium. Suspendisse potenti. Morbi rutrum erat vel eros convallis, id pharetra lacus tincidunt. Sed ut lorem eget nisl porttitor sollicitudin non sed libero.',
        'Aliquam ac urna ut neque lacinia lacinia a nec nunc. Curabitur auctor nisi id purus pellentesque, in lacinia nisl efficitur. Quisque sit amet sapien nec sapien faucibus molestie.'
      ]
    },
    {
      title: 'Endpoints',
      bodyParagraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget vehicula lorem. Fusce eu ornare dui. Vivamus tincidunt nisl at arcu feugiat, nec placerat elit lacinia.',
        'Sed scelerisque feugiat libero, quis fermentum dolor interdum in. Proin vitae varius libero. Vivamus sit amet nisl non diam fringilla cursus. Pellentesque ornare dui id purus cursus, at vestibulum purus placerat.',
        'Praesent tincidunt velit in ligula tincidunt, sed tempus nisl sagittis. Vivamus at finibus leo, et dapibus mauris. Curabitur fermentum velit quis mi maximus, quis ultrices dui auctor.',
        'Mauris egestas neque ut sem facilisis, a luctus mauris pretium. Suspendisse potenti. Morbi rutrum erat vel eros convallis, id pharetra lacus tincidunt. Sed ut lorem eget nisl porttitor sollicitudin non sed libero.',
        'Aliquam ac urna ut neque lacinia lacinia a nec nunc. Curabitur auctor nisi id purus pellentesque, in lacinia nisl efficitur. Quisque sit amet sapien nec sapien faucibus molestie.'
      ]
    }
  ]

  return (
    <S.DocsWrapper>
      {docsSections.map((section, index) => (
        <React.Fragment key={'docs-section-fragment-' + section.title}>
          <DocsSection
            key={'docs-section-' + section.title}
            title={section.title}
            bodyParagraphs={section.bodyParagraphs}
          />
          {/* <iframe
            height="400px"
            width="100%"
            src="https://replit.com/@moenningluke/testrunner?embed=true#main.py"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          ></iframe> */}
          {index !== docsSections.length - 1 ? (
            <S.DocsDivider key={'docs-section-divider-' + section.title} />
          ) : null}
        </React.Fragment>
      ))}
    </S.DocsWrapper>
  )
}

export default Docs
