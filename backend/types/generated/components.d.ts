import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectDetailsProjectDetails extends Schema.Component {
  collectionName: 'components_project_details_project_details';
  info: {
    displayName: 'projectDetails';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    function: Attribute.String & Attribute.Required;
    participants: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project-details.project-details': ProjectDetailsProjectDetails;
    }
  }
}
