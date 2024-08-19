// Importing the type for the sidebar configuration
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Define the sidebar configuration
const sidebars: SidebarsConfig = {
  userGuideSidebar: [
    {
      type: 'category',
      label: 'User Guide', // This label will be shown in the sidebar
      items: [
        {
          type: 'category',
          label: 'Afya Msafiri for Manager',
          items: [
            'Afya Msafiri for-manager/4.1 Accessing afyamsafiri application',
            'Afya Msafiri for-manager/4.2 Travelers Screening',
            'Afya Msafiri for-manager/4.3 Yellow Fever Certification',
          ],
        },
        {
          type: 'category',
          label: 'Afya Msafiri for Travelers',
          items: [
            'Afya Msafiri for-travelers/3.1 Accessing the afyamsafiri application',
            'Afya Msafiri for-travelers/3.2 Filling Travelers Surveillance Arrival Form',
            'Afya Msafiri for-travelers/3.3 Filling Travelers Surveillance Departure Form',
            'Afya Msafiri for-travelers/3.4 Booking for Yellow Fever Vaccination',
            'Afya Msafiri for-travelers/3.5 Request for Card Replacement',
          ],
        },
        {
          type: 'category',
          label: 'System Requirement and Components',
          items: [
            'System Requirement and Components/2.1 System Access Requirement',
            'System Requirement and Components/2.2 System Components',
          ],
        },
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'introduction/1.1 Background',
            'introduction/1.2 Rationale',
            'introduction/1.3 Objective',
            'introduction/1.4 Scope',
          ],
        },
      ],
    },
  ],
};

export default sidebars;




