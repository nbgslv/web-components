import {Component, Prop, h, State} from '@stencil/core';
import {SelectOption} from './cv-select.types';

@Component({
  tag: 'cv-select',
  styleUrl: 'cv-select.scss',
  shadow: true,
})
export class CvSelect {
  @Prop() label: string;
  @Prop() name: string;

  @State() selectedOption: SelectOption = { label: '', value: '' }
  @State() menuOpen: boolean = false;
  @State() options: SelectOption[] = [];

  componentWillLoad() {
    this.options = [
      {
        label: 'Option 1',
        value: 'option-1'
      },
      {
        label: 'Option 2',
        value: 'option-2'
      },
      {
        label: 'Option 3',
        value: 'option-3'
      }
    ]
  }

  handleSelect(value: string) {
    this.selectedOption = this.options.find(option => option.value === value);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.name}>{this.label}</label>
        <input
          readonly
          onClick={() => {
            this.menuOpen = !this.menuOpen
          }}
          // onBlur={() => {
          //   this.menuOpen = false
          // }}
          type="text"
          value={this.selectedOption.label}
        />
        <div class={`menu${this.menuOpen ? ' open' : ''}`}>
          {this.menuOpen ?
            this.options.map(option => (
              <div class={`option${this.selectedOption?.value === option.value ? ' selected' : ''}`} onClick={() => this.handleSelect(option.value)}>
                {option.label}
              </div>
            )) : null
          }
        </div>
      </div>
    );
  }

}
