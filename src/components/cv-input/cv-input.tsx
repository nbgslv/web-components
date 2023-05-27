import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cv-input',
  styleUrl: 'cv-input.css',
  shadow: true,
})
export class CvInput {
  /**
   * Value of the input
   */
  @Prop() value: string;

  /**
   * Placeholder of the input
   */
  @Prop() placeholder: string;

  /**
   * Type of the input
   */
  @Prop() type: string;

  /**
   * Name of the input
   */
  @Prop() name: string;

  /**
   * Label of the input
   */
  @Prop() label: string;

  render() {
    return (
      <div class="cv-input">
        <label htmlFor={this.name}>{this.label}</label>
        <input id={this.name} type={this.type} name={this.name} placeholder={this.placeholder} value={this.value} />
      </div>
    );
  }
}
