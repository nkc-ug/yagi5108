import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';

logEvent(analytics, 'notification_received');
