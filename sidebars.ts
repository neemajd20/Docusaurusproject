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
          label: 'Afya Msafiri for-manager',
          items: [
            'Afya Msafiri for-manager_4_1_Accessing afyamsafiri application',
            'Afya Msafiri for-manager_4-2_Travelers Screening',
            'Afya Msafiri for-manager_4_3_Yellow Fever Certification',
          ],
        },
        {
          type: 'category',
          label: 'Afya Msafiri for-travelers',
          items: [
            'Afya Msafiri for-travelers_3_1_Accessing the afyamsafiri application',
            'Afya Msafiri for-travelers_3_2_Filling Travelers Surveillance arrival Form',
            'Afya Msafiri for-travelers_3_3_Filling Travelers Surveillance Departure Form',
            'Afya Msafiri for-travelers_3_4_Booking for Yellow Fever Vaccination',
            'Afya Msafiri for-travelers_3_5_Request for card replacement',
          ],
        },
        {
          type: 'category',
          label: 'System Requirement and Components',
          items: [
            'System Requirement and Components_2_1_System access Requirement',
            'System Requirement and Components_2_2_System components',
          ],
        },
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'introduction_1_1_Background',
            'introduction_1_2_Rationale',
            'introduction_1_3_Objective',
            'introduction_1_4_Scope',
          ],
        },
      ],
    },
  ],
};

export default sidebars;




