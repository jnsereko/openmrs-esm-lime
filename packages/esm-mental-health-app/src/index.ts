import {
  defineConfigSchema,
  getSyncLifecycle,
} from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import { createDashboardLink as createPatientChartDashboardLink } from '@openmrs/esm-patient-common-lib';
import { patientChartDashboardMeta } from './dashboard.meta';
import MentalHealthSummary from './mental-health/mental-health-summary.component';
export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

const moduleName = '@madiro/esm-mental-health-app';

const options = {
  featureName: 'mental-health',
  moduleName,
};

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

// t('mentalHealth', 'Mental Health')
export const patientMentalHealthSummaryDashboardLink = getSyncLifecycle(
  createPatientChartDashboardLink({ ...patientChartDashboardMeta, moduleName }),
  options,
);

export const patientMentalHealthSummary = getSyncLifecycle(MentalHealthSummary, options);
