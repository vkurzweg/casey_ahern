// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/rates',
      name: 'booking',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/BookingPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/instructors',
      name: 'instructors',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/InstructorsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/instructors-hawaii',
      name: 'instructorsHawaii',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/InstructorsHawaiiPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/faq',
      name: 'faq',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Faqpage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/gallery',
      name: 'photography',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PhotographyPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dingrepair',
      name: 'dingrepair',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/DingRepairPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/retreats',
      name: 'retreats',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RetreatsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/camping',
      name: 'camping',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CampingPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/contact',
      name: 'contact',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ContactPage/sagas'),
          import('containers/ContactPage'),

        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/careers',
      name: 'careers',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/CareersPage/sagas'),
          import('containers/CareersPage'),

        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/press',
      name: 'press',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PressPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
