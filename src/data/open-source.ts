export type OSSContributionType = 'fix' | 'feature' | 'created'

export type OSSContribution = {
  id: string
  repo: string
  org: string
  description: string
  contribution: string
  date: string
  url: string
  type: OSSContributionType
}

export const ossContributions: OSSContribution[] = [
  {
    id: 'react-webrtc-viewer',
    repo: 'react-webrtc-viewer',
    org: 'Mkhgkk',
    description: 'React component for WebRTC live streaming',
    contribution: 'Created a React component for WebRTC live streaming with WHEP (WebRTC-HTTP Egress Protocol) support, featuring built-in zoom/pan functionality and customizable UI.',
    date: 'Jun 2025',
    url: 'https://github.com/Mkhgkk/react-webrtc-viewer',
    type: 'created',
  },
  {
    id: 'mediamtx',
    repo: 'mediamtx',
    org: 'bluenviron',
    description: 'Real-time media server and proxy',
    contribution: 'Resolved issues in the Dockerfile and docker run command for binary builds, addressing errors related to legacy ENV format and invalid volume specifications.',
    date: 'Jan 2025',
    url: 'https://github.com/bluenviron/mediamtx/pull/3761',
    type: 'fix',
  },
  {
    id: 'python-onvif-zeep',
    repo: 'python-onvif-zeep',
    org: 'FalkTannhaeuser',
    description: 'Python ONVIF client implementation',
    contribution: 'Fixed the handling of XAddr port information to ensure correct connections over NAT configurations.',
    date: 'Jan 2025',
    url: 'https://github.com/FalkTannhaeuser/python-onvif-zeep/pull/133',
    type: 'fix',
  },
  {
    id: 'teltonikaparser',
    repo: 'TeltonikaParser',
    org: 'TimeLord2010',
    description: 'Teltonika GPS device data parser',
    contribution: 'Implemented support for data sending parameter IDs from various Teltonika devices, enhancing library flexibility beyond the FMB640 model.',
    date: 'May 2022',
    url: 'https://github.com/TimeLord2010/TeltonikaParser/pull/6',
    type: 'feature',
  },
]
