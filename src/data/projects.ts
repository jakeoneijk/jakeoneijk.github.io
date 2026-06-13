export type Project = {
  title: string
  author: string
  note: string
  /** Link to the project / demo page. Omit if there is none. */
  link?: string
  /** Embeddable URL (e.g. a YouTube embed) shown as an inline card. */
  embLink?: string
  bulletPoints: string[]
}

export type ProjectCategory = 'Research' | 'Industry'

export const projectCategories: ProjectCategory[] = ['Research', 'Industry']

export const projects: Record<ProjectCategory, Project[]> = {
  Research: [
    {
      title:
        'PF-D2M: A Pose-free Diffusion Model for Universal Dance-to-Music Generation',
      author: 'Jaekwon Im, Natalia Polouliakh, Taketo Akama',
      note: 'Proceedings of the 27th INTERSPEECH Conference (Interspeech), 2026',
      link: 'https://jakeoneijk.github.io/pfd2m_project',
      embLink: 'https://www.youtube.com/embed/8ESg45dEBSs?si=qMQdpQY5NmJbGms8',
      bulletPoints: [
        'A dance-to-music generation model that supports general dance videos, including multiple dancers and non-human dancers.',
        'Introduces a progressive training strategy that mitigates overfitting under data scarcity and improves the model’s generative capability.',
        'Uses visual features extracted from video instead of relying on pose or motion features.',
      ],
    },
    {
      title:
        'SAGA-SR: Semantically and Acoustically Guided Audio Super-Resolution',
      author: 'Jaekwon Im, Juhan Nam',
      note: 'Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2026',
      link: 'https://jakeoneijk.github.io/saga-sr-project/',
      bulletPoints: [
        'A versatile audio super-resolution model that upsamples music, speech, and sound effects from 4–32kHz to 44.1kHz.',
        'Combines text and spectral roll-off embeddings for robust and semantically aligned reconstruction.',
        'Based on a DiT backbone trained with a flow matching objective.',
        'Achieves state-of-the-art performance in both objective and subjective evaluations.',
      ],
    },
    {
      title:
        'FlashSR: One-step Versatile Audio Super-resolution via Diffusion Distillation',
      author: 'Jaekwon Im, Juhan Nam',
      note: 'Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025',
      link: 'https://jakeoneijk.github.io/flashsr-demo/',
      bulletPoints: [
        'A one-step diffusion model for audio super-resolution, upsampling music, speech, and sound effects from 4–32kHz to 48kHz.',
        'Applies diffusion distillation and introduces the SR Vocoder, specifically designed for SR models operating on mel-spectrograms.',
        'Achieves performance approximately 14 times faster than real-time on a single A6000 GPU.',
      ],
    },
    {
      title:
        'DIFFRENT: A Diffusion Model for Recording Environment Transfer of Speech',
      author: 'Jaekwon Im, Juhan Nam',
      note: 'Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024',
      link: 'https://jakeoneijk.github.io/diffrent-demo/',
      embLink: 'https://www.youtube.com/embed/NYptYx7tMBY',
      bulletPoints: [
        'A diffusion model for recording environment transfer that applies the recording conditions of a reference speech to an input while preserving its content.',
        'Validate it in the speech enhancement and acoustic matching scenarios and show that the model achieves superior performance in both objective and subjective evaluation.',
        'Shows that the recording environment encoder, trained jointly with the diffusion decoder without an additional loss, achieves better disentanglement than prior triplet-loss-based acoustic embedding network.',
      ],
    },
    {
      title:
        'Video-Foley: Two-Stage Video-To-Sound Generation via Temporal Event Condition for Foley Sound',
      author: 'Junwon Lee, Jaekwon Im, Dabin Kim, Juhan Nam',
      note: 'IEEE/ACM Transactions on Audio, Speech and Language Processing (TASLP), 2025',
      link: 'https://jnwnlee.github.io/video-foley-demo/',
      embLink: 'https://www.youtube.com/embed/5FWNL6KoL08',
      bulletPoints: [
        'My role: Implemented the RMS2Sound (RMS-ControlNet).',
        'Leverages temporal event conditions for annotation-free training of highly synchronized foley sound generation.',
        'A two-stage model comprising Video2RMS and RMS2Sound (RMS-ControlNet).',
      ],
    },
  ],
  Industry: [
    {
      title: 'VOX Factory',
      author: 'AudAi (Co-founder & AI / SW Engineer)',
      note: 'May 2023 - Jul 2025',
      link: 'https://voxfactory.app/',
      embLink: 'https://www.youtube.com/embed/-CMKNlhh0WQ?si=uxZ2ONpFDUXtblp8',
      bulletPoints: [
        'Research on neural vocoders and singing voice synthesis.',
        'Product development of Vox Factory using SolidJS.',
      ],
    },
    {
      title: 'AI Voice Collaboration with SM Entertainment (nævis – Sensitive)',
      author: 'AudAi (Co-founder & AI / SW Engineer)',
      note: 'Released Aug 2025',
      embLink: 'https://www.youtube.com/embed/Zg4rV7douMs?si=uEF7HUmunIIdCnsZ',
      bulletPoints: [
        'AudAi provided AI voice technology for SM Entertainment’s virtual artist nævis.',
      ],
    },
  ],
}
